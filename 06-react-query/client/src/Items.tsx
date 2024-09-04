import { useFetchTasks } from "./services/hooks";
import { SingleItem } from "./SingleItem";

export const Items = () => {
  const { isLoading, isError, data } = useFetchTasks();

  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>;
  }
  if (isError) {
    return <p style={{ marginTop: '1rem ' }}>There was an error...</p>;
  }
  if (!data) {
    return <p style={{ marginTop: '1rem ' }}>No data available...</p>;
  }

  return (
    <div className='items'>
      {data.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};
