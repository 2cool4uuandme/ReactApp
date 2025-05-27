import Image from "next/image";
import Form from "next/form";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/sunrise.jpg")'}}>
      <main>
        <h2 className="">
          Hello World!
        </h2>
      </main>
    </div>
  );
}
