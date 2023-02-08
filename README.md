# Images Manager Service

That's an example of some classes for handling images of a product in an ecommerce app or similar.
 
UploadImagesUsecase enables the vendor to upload some images of the product on a blob storage (e.g. AWS S3, Google Colud Storage) and keep track of them on a DB(e.g. MongoDb, Postgress) through an API.

GetImagesUsecase can be used by a user who is visiting the product page and wants to see it's images.
