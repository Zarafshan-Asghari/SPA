import Footer from "../../components/footer";
import MyNavbar from "../../components/navbar";

export default function Article() {
  return (
    <>
      <MyNavbar />
      <div className="flex items-center justify-center flex-col space-y-4">
        <h1 className="flex items-center justify-center py-10 uppercase text-orange-700">
          articles
        </h1>

        <p className=" text-justify max-w-xl p-6">
          Minus expedita molestiae veniam ut excepturi recusandae ipsa suscipit
          voluptas, quaerat commodi? Explicabo ad amet, aspernatur, dicta aut
          delectus eaque temporibus, esse unde officia itaque et aperiam? ipsum
          dolor sit amet consectetur adipisicing elit. Minus expedita molestiae
          veniam ut excepturi recusandae ipsa suscipit voluptas, quaerat
          commodi? Explicabo ad amet, aspernatur, dicta aut delectus eaque
          temporibus, esse unde officia itaque et aperiam? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Minus expedita molestiae veniam ut
          excepturi recusandae ipsa suscipit voluptas, quaerat commodi?
          Explicabo ad amet, aspernatur, dicta aut delectus eaque temporibus,
          esse unde officia itaque et aperiam?
        </p>
      </div>
    </>
  );
}
