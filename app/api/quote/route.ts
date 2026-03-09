import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
const RAW_GOOGLE_CREDENTIALS = process.env.GOOGLE_CREDENTIALS;

async function getSheetsClient() {
  if (!SHEET_ID || !RAW_GOOGLE_CREDENTIALS) {
    throw new Error("Google Sheets config is missing");
  }

  const credentials = JSON.parse(RAW_GOOGLE_CREDENTIALS);
  const privateKey = (credentials.private_key as string).replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      year,
      make,
      model,
      odometer,
      drivability,
      firstName,
      countryCode,
      phone,
      postal,
      sourcePath,
    } = body ?? {};

    if (
      !year ||
      !make ||
      !model ||
      !odometer ||
      !drivability ||
      !firstName ||
      !countryCode ||
      !phone ||
      !postal
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sheets = await getSheetsClient();

    const now = new Date();
    const timestamp = now.toISOString();
    const fullPhone = `${countryCode} ${phone}`.trim();

    const values = [
      [
        timestamp,
        year,
        make,
        model,
        odometer,
        drivability,
        firstName,
        fullPhone,
        postal,
        sourcePath || req.nextUrl.pathname,
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID!,
      range: "Sheet1!A:Z",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error writing to Google Sheets", error);
    return NextResponse.json(
      { error: "Failed to save quote" },
      { status: 500 }
    );
  }
}

