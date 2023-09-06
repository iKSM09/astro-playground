import { useEffect, useState } from "react";

type boxStyleType = {
  transform: string;
};

const ReactPlayground = () => {
  const [perspective, setPerspective] = useState(100);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  const [boxStyle, setBoxStyle] = useState<boxStyleType>({} as boxStyleType);

  useEffect(() => {
    setBoxStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
    });
  }, [perspective, rotateX, rotateY, rotateZ]);

  const reset = () => {
    setPerspective(100);
    setRotateX(0);
    setRotateY(0);
    setRotateZ(0);
  };

  const copy = async () => {
    let text = `transform: ${boxStyle?.transform};`;
    console.log({ boxStyle });
    console.log({ text });

    await navigator.clipboard.writeText(text);

    alert("React: CSS Copied to Clipboard");
  };

  return (
    <main className="flex justify-around items-center h-[420px] max-w-[768px] my-0 mx-auto text-[22px]">
      <section className="settings w-[50%] z-2">
        <div className="settings-container">
          <label className="block text-white">
            perspective: {perspective}px;
          </label>
          <input
            className="block mb-[10px] w-[200px]"
            type="range"
            onChange={(e) => setPerspective(+e.target.value)}
            min="0"
            max="999"
            value={perspective}
          />

          <label className="block text-white">rotateX: {rotateX}deg; </label>
          <input
            className="block mb-[10px] w-[200px]"
            type="range"
            onChange={(e) => setRotateX(+e.target.value)}
            min="-180"
            max="180"
            value={rotateX}
          />

          <label className="block text-white">rotateY: {rotateY}deg; </label>
          <input
            className="block mb-[10px] w-[200px]"
            type="range"
            onChange={(e) => setRotateY(+e.target.value)}
            min="-180"
            max="180"
            value={rotateY}
          />

          <label className="block text-white">rotateZ: {rotateZ}deg; </label>
          <input
            className="block mb-[10px] w-[200px]"
            type="range"
            onChange={(e) => setRotateZ(+e.target.value)}
            min="-180"
            max="180"
            value={rotateZ}
          />

          <button
            type="button"
            className="bg-[#8d81f3] text-white inline-block text-[20px] p-[10px] outline-none border-none mr-[10px]"
            onClick={reset}
          >
            Reset
          </button>
          <button
            type="button"
            className="bg-[#8d81f3] text-white inline-block text-[20px] p-[10px] outline-none border-none mr-[10px]"
            onClick={copy}
          >
            Copy
          </button>
        </div>
      </section>
      <section className="output">
        <div className="box-container p-[50px] border border-[#8d81f3] ">
          <div
            className="box w-[150px] h-[150px] bg-[#8d81f3] flex justify-center items-center"
            style={boxStyle}
          >
            <h3 className="text-[30px] font-bold">React</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReactPlayground;
