export const homeText = [
    "👨‍💻 Website is under construction... 🛠️",
    "Welcome to Waifuland, your api for using waifus images in various sizes, quantities and more.",
    "More waifus images will be added, at the moment we only have a limited number of images, but soon you will be able to upload your own images.",
    "We have a documentation available, you can visit it here",
];

export const documentationText = {
    random: {
        method: "GET",
        text: "Grab a random image",
        endpoint: "api/images",
    },
    size: {
        method: "GET",
        text: "Grab an array of random images with the size specified",
        endpoint: "api/images?size=<Size>",
    },
    tag_id: {
        method: "GET",
        text: "Get a random image with the specified tag_id",
        endpoint: "api/images?tag_id=<TagId>",
    },
};

export const baseProfilePicture = "https://via.placeholder.com/300";

export const waifusPerFetch = 8;
