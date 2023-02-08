export class RegisterImageUrlService {
  async register(imageUrl: string, productId: string) {
    try {
      let data = {
        image_url: imageUrl,
        product_id: productId,
      };
      //TODO: POST request to {yourdomain}/v1/productImages
    } catch (error) {
      throw new Error("Api Failure: " + error.toString());
    }
  }
}
