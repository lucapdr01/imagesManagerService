import { getImagesUrlsService, downloadImageService } from "../Services";

class GetImagesUsecase {
  async getImages(productId: string): Promise<string[]> {
    const imagesUrls: string[] = await getImagesUrlsService.getUrls(productId);
    let imagetPaths: string[] = [];
    imagesUrls.forEach(async (imagesUrl) => {
      const imagePath: string = await downloadImageService.download(imagesUrl);
      imagetPaths.push(imagePath);
    });
    return imagetPaths;
  }
}
