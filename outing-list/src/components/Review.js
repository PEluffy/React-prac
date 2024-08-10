function Review({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="footer">
      <em>
        {percentage === 100
          ? "You got everyThiing!Ready to go"
          : `You have ${numItems} items on your list ,and you havee already packed
        ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}

export default Review;
