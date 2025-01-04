import Sidebar from "./components/Sidebar";

export default function DashboardPage(): JSX.Element {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px", backgroundColor: "#f8f9fa" }}>
        <section style={{color:"#000"}}>
          <h1>Dashboard</h1>
          <p>Selamat datang di dashboard admin. Pilih menu di sidebar untuk melanjutkan.</p>
        </section>
      </main>
    </div>
  );
}
