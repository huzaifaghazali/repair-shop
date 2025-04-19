import TicketSearch from './TicketSearch';

export const metadata = {
  title: 'Tickets Search',
};

export default async function Tickets({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) {
    return (
      <>
        <TicketSearch />
      </>
    );
  }
  return <h2>Tickets Page</h2>;
}
