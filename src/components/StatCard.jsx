export default function StatCard({ titulo, valor, tipo }) {
    return (
    <article className={'stat-card${tipo}'}>
        <h2>{valor}</h2>
        <p>{titulo}</p>
    </article>
    );
}