export const PricingTable = () => {
  return (
    <div className="grid gap-25 my-25 p-25">
      <table className="w-full text-center pricing--table">
        <tr className="text-muted pricing--table--header ">
          <th className="py-3">Cloud</th>
          <th className="py-3">Region</th>
          <th className="py-3">Storage Cost</th>
        </tr>
        <tr>
          <td className="py-3">AWS</td>
          <td className="py-3">Mumbai</td>
          <td className="py-3">0.25</td>
        </tr>
        <tr>
          <td className="py-3">AWS</td>
          <td className="py-3">Mumbai</td>
          <td className="py-3">0.25</td>
        </tr>
        <tr>
          <td className="py-3">AWS</td>
          <td className="py-3">Mumbai</td>
          <td className="py-3">0.25</td>
        </tr>
      </table>
    </div>
  );
};
