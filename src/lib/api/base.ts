import PocketBase from "pocketbase";

export class BaseService {
  private url: string; // Mark as private if not accessed outside this class
  private pb: PocketBase; // Use specific type instead of any

  constructor(url: string) {
    this.url = url;
    this.pb = new PocketBase(this.url);
  }

  getPocketbase(): PocketBase {
    return this.pb;
  }

  async authenticateWithGoogle() {
    try {
      const authData = await this.pb
        .collection("user")
        .authWithOAuth2({ provider: "google" });
      console.log("Authentication Successful:", authData);
      return authData;
    } catch (error) {
      console.error("Authentication Failed:", error);
      throw error; // It's useful to rethrow the error so that you can catch it in the component.
    }
  }

  getAuthStore() {
    return this.pb.authStore;
  }
}

// Assuming VITE_POCKETBASE_URL is properly configured in your env
export const base = new BaseService(
  import.meta.env.VITE_POCKETBASE_URL as string,
);

export default base;
