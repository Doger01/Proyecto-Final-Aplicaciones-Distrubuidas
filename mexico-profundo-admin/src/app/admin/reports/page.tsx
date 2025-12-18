"use client";

import { useEffect, useState } from "react";

type Report = {
  totalUsers: number;
  activeMicrosites: number;
  monthlyRevenue: number;
};

export default function ReportsPage() {
  const [report, setReport] = useState<Report | null>(null);

  useEffect(() => {
    fetch("/api/reports")
      .then((res) => res.json())
      .then(setReport);
  }, []);

  if (!report) return <p>Cargando reportes...</p>;

  return (
    <div>
      <h1 className="text-lg font-bold mb-4">
        Reportes Financieros
      </h1>

      <ul className="space-y-2">
        <li>Usuarios totales: {report.totalUsers}</li>
        <li>Micrositios activos: {report.activeMicrosites}</li>
        <li>Ingresos mensuales: ${report.monthlyRevenue}</li>
      </ul>
    </div>
  );
}
