import { registerImageUrlService, uploadImageService } from "../Services";

export class UploadImagesUsecase {
  async uploadImages(productId: string, imagetPaths: string[]) {
    imagetPaths.forEach(async (imagePath) => {
      const imageUrl = await uploadImageService.upload(imagePath);
      await registerImageUrlService.register(imageUrl, productId);
    });
  }
}
