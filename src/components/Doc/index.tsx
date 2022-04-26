import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `
## 🚧 Routes

- GET Grab a random image api/images
- GET Grab an array of random images api/images?size=Size

## 📖 Status

- Want to see how the project is going? check this [Issue](https://github.com/jd-apprentice/waifuland-api/issues/3)

## 🌐 Can I use the api?

- Yes! is currently being hosted in heroku [Get waifu](https://waifuland-api.herokuapp.com/api/images)
`;

const Doc = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        placeItems: "center",
        fontSize: 30,
      }}
    >
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default Doc;
