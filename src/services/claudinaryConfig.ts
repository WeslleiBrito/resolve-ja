import { Cloudinary } from '@cloudinary/url-gen'
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { TConfigImage } from '../routes/interfaces';

const ImageItem = (dados: TConfigImage) => {
    const {
        nameImage,
        format,
        quality,
        width,
        height
    } = dados;

    const cld = new Cloudinary({
        cloud: {
            cloudName: "ds287jui9",
            apiKey: "663992217716366",
            apiSecret: "3n8j4XJdKaNKygBcy4jPqy5axjo"
        }
    });

    const img = cld
        .image(nameImage)
        .format(format || "auto")
        .quality(quality || "auto")
        .resize(auto().gravity(autoGravity()).width(width || 500).height(height || 500));

    return img;
}

export default ImageItem;