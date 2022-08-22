type HeaderProps = {
  handleToogleDarkMode: (theme:any) => void;
};

export function Header({ handleToogleDarkMode }: HeaderProps) {
  return (
    <div className="header">
      <h1>Note</h1>
      <button
        onClick={() =>
          handleToogleDarkMode(
                (previousDarkMode:boolean) => !previousDarkMode
            )
        }
        className="save"
      >
        Toogle Mode
      </button>
    </div>
  );
}
