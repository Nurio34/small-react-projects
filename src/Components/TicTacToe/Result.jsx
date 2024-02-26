
function Result({showResultBox, currentOne}) {
  return (
    <div>
        {showResultBox && (
            <div>Winner is {currentOne === "X" ? "O" : "X"}</div>
        )}
    </div>
  )
}

export default Result