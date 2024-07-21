import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make it priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const id = params.orderId;
  const obj = { priority: true };

  await updateOrder(id, obj);
  return null;
}

export default UpdateOrder;
