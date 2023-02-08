export class UploadImageService {
  async upload(imagePath: string): Promise<string> {
    try {
      //TODO: upload to blob storage
      let imageUrl: string = "";
      return imageUrl;
    } catch (error) {
      throw new Error("BlobStorage Failure: " + error.toString());
    }
  }
}
