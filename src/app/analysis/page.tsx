"use client";

import DataChart from "@/src/components/charts/dataChart";
import GoBackButton from "@/src/components/goBackButton";
import { useData } from "@/src/store/useDataStore";

export default function AnalysisPage() {
  const { dataIn7Days } = useData();
  return (
    <div className="m-auto w-full p-4">
      <GoBackButton className="mb-4 block" />
      <section className="rounded-2xl bg-white/10 px-4 backdrop-blur-2xl">
        <DataChart dataIn7Days={dataIn7Days} />
      </section>
    </div>
  );
}
