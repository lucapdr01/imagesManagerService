export class DownloadImageService {
  async download(imageUrl: string): Promise<string> {
    try {
      //TODO: download form blob storage
      const imagePath: string = "";
      return imagePath;
    } catch (error) {
      throw new Error("BlobStorage Failure: " + error.toString());
    }
  }
}
