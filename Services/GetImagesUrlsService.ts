export class GetImagesUrlsService {
  async getUrls(productId: string): Promise<string[]> {
    try {
      //TODO: GET request to {yourdomain}/v1/productImages/{productId}
      let imageUrl: string[] = [];
      return imageUrl;
    } catch (error) {
      throw new Error("Api Failure: " + error.toString());
    }
  }
}
