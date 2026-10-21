export interface LeadData {
  name: string;
  email: string;
  phone: string;
  business?: string;
  combo?: string;
  message?: string;
}

/**
 * Service to sync incoming leads with Twenty CRM (Self-hosted or Cloud).
 * 
 * Configure the following environment variables in your .env file:
 * VITE_TWENTY_API_URL=https://tu-servidor-twenty.com
 * VITE_TWENTY_API_KEY=tu_api_key_aqui
 */
export async function syncLeadToTwenty(lead: LeadData): Promise<boolean> {
  const apiUrl = import.meta.env.VITE_TWENTY_API_URL;
  const apiKey = import.meta.env.VITE_TWENTY_API_KEY;

  if (!apiUrl || !apiKey) {
    // Credentials not set; graceful fallback
    console.info("[CRM] Twenty CRM no está configurado aún en .env. El contacto continúa por WhatsApp.");
    return false;
  }

  try {
    const nameParts = lead.name.trim().split(" ");
    const firstName = nameParts[0] || "Cliente";
    const lastName = nameParts.slice(1).join(" ") || "Sin apellido";

    // Standard Twenty CRM REST API payload for /rest/people
    const body = {
      name: {
        firstName,
        lastName,
      },
      emails: {
        primaryEmail: lead.email,
      },
      phones: {
        primaryPhoneNumber: lead.phone,
      },
      jobTitle: lead.business 
        ? `${lead.business} (Combo: ${lead.combo || "General"})` 
        : `Interés: ${lead.combo || "General"}`,
    };

    const cleanBaseUrl = apiUrl.replace(/\/+$/, "");
    const endpoint = cleanBaseUrl.endsWith("/rest") 
      ? `${cleanBaseUrl}/people` 
      : `${cleanBaseUrl}/rest/people`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.warn(`[CRM] Twenty respondió con estado ${response.status}:`, errorText);
      return false;
    }

    console.info("[CRM] ¡Contacto registrado con éxito en Twenty CRM!");
    return true;
  } catch (error) {
    console.warn("[CRM] No se pudo sincronizar con Twenty CRM (verificar CORS o conexión):", error);
    return false;
  }
}
