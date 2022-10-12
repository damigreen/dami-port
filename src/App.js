// style={{ color: "red", height: "70vh" }}
function App() {
  return (
    <div className="app debug-screens flex min-h-screen items-center justify-items-center bg-[#1D1D20]">
      <div
        className="my-0 mx-auto flex w-4/5 flex-col items-center justify-between border-[1.5rem] border-solid border-zinc-400"
        style={{ color: "red", height: "70vh" }}
      >
        <div className="flex w-[95%] flex-row justify-between">
          <span>logo</span>
          <span>Accounts</span>
        </div>
        <div className="flex w-[85%] items-start space-x-4 border-4 ">
          <div className="shrink grow basis-[55%]  p-4">
            <span className="!p-0 text-[#cccccc]" style={{ padding: "0" }}>
              <h1 className="text-ellipsis text-7xl">Welcome.</h1>
            </span>
            <div className="mt-7 text-[#d1d1d1]">
              <p className="block text-[0.9em] leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="mt-6 shrink grow basis-[40%]">
            <h4 className="text-3xl text-[#d1d1d1]">Projects</h4>
            <div className="mt-6 border-l-2 border-t-2 pl-5 pt-5 text-[#b5b5b5] w-9">
              <ul>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-[95%] flex-row justify-between">
          <span></span>
          <span>hello</span>
        </div>
      </div>
    </div>
  );
}

export default App;
