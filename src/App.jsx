import { useState } from 'react';
import Entry from './components/Entry';
import Header from './components/Header';
import './index.css';
import data from './data';


export default function App() {
  const [filter, setFilter] = useState('all');

  // Filter the entries based on the selected filter
  const filteredEntries = data.filter(entry => {
    if (filter === 'all') return true;
    return entry.category.includes(filter);
  });

  // Count entries by category for badge numbers (optional)
  const categoryCounts = {
    'national-parks': data.filter(entry => entry.category.includes('national-parks')).length,
    'museums': data.filter(entry => entry.category.includes('museums')).length,
    'concerts': data.filter(entry => entry.category.includes('concerts')).length,
    'international': data.filter(entry => entry.category.includes('international')).length,
  };

  // Create the filter button component with optional count badge
  function FilterButton({ name, label }) {
    return (
      <button
        className={filter === name ? 'filter-btn active' : 'filter-btn'}
        onClick={() => setFilter(name)}
      >
        {label}
        {name !== 'all' && (
          <span className="count-badge">{categoryCounts[name]}</span>
        )}
      </button>
    );
  }

  return (
    <div className="container">
      <Header />

      <div className="filter-container">
        <FilterButton name="all" label="All Memories" />
        <FilterButton name="national-parks" label="National Parks" />
        <FilterButton name="museums" label="Museums" />
        <FilterButton name="concerts" label="Concerts & Festivals" />
        <FilterButton name="international" label="International" />
      </div>

      <section className="entries-list">
        {filteredEntries.length > 0 ? (
          filteredEntries.map(entry => (
            <Entry key={entry.id} entry={entry} />
          ))
        ) : (
          <p className="no-entries">No memories found for this filter.</p>
        )}
      </section>
    </div>
  );
}