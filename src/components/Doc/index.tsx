import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `## 🗒 About the project

- The project is a API-REST which gives random waifu images, they are uploaded to cloudinary and their public url is stored in mongodb
- There is no real purpose on this project, just for learning
- Learning throught documentation

## 🚧 Routes

- GET Grab a random image api/images
- GET Grab an array of random images api/images?size=Size

## 📖 Status

- Want to see how the project is going? check this [Issue](https://github.com/jd-apprentice/waifuland-api/issues/3)

## 🌐 Can I use the api?

- Yes! is currently being hosted in heroku [Get waifu](https://waifuland-api.herokuapp.com/api/images)

## 📚 Stack

- React
- TypeScript
- Sass
- Mui
- Nodejs
- Express
- Typescript
- Multer
- Cloudinary
- Heroku
- Mongodb
- Mongoose
`;

const Doc = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        placeItems: "center",
        fontSize: 20,
      }}
    >
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default Doc;
