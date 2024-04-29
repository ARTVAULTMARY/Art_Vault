import Account from "./_components/Account";
import DataTable from "./_components/DataTable";
import ImageUpload from "./_components/ImageUpload";
import CreateGallery from "./_components/GalleryCreate";

export default function BackendTester() {
    return (
        <div>
            <div className="h-1 bg-white-700 my-4"></div>
            <p className="text-xl">Backend Tester</p>
            <p>Mock frontend to test backend APIs, not designed for production</p>
            <div className="h-1 bg-white-700 my-4"></div>
            <Account />
            <div className="h-1 bg-white-700 my-4"></div>
            <CreateGallery />
            <div className="h-1 bg-white-700 my-4"></div>
            <ImageUpload />
            <div className="h-1 bg-white-700 my-4"></div>
            <DataTable dataType="Users" tableHeader={["id", "email", "username", "password", "updatedAt", "createdAt"]} />
            <DataTable dataType="Galleries" tableHeader={["id", "userId", "title", "description", "updatedAt", "createdAt"]} />
            <DataTable dataType="Images" tableHeader={["id", "galleryId", "title", "description", "imageURL", "downloadURL", "public", "updatedAt", "createdAt"]} />
            <div className="h-1 bg-white-700 my-4"></div>
        </div>
    )
}