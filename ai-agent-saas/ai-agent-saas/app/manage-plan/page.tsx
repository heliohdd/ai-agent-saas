import PricingCard from "@/components/LivroSaaS/pricing-card";

function ManagePlan() {
  return (
    <div className=" container mx-auto p-4 md:p-0 ">
      <h1 className="text-2xl font-bold mb-4 my-8">Manage Your Plan</h1>
      <p className="text-gray-600 mb-8">
        Manage your subscription and billing details here.
      </p>

      <div className="flex flex-col items-center"></div>
      <PricingCard />
      {/* <SchematicComponent componentId="cmpn_4ShecskXt6P" /> */}
    </div>
  );
}

export default ManagePlan;
