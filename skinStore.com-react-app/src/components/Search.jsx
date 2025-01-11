import { useState } from 'react';
import { Input,IconButton, VStack, Box } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';
import { useProducts } from './ProductContext';
import { InputGroup,  } from "@/components/ui/input-group"
import  "./Searchbar.css"

const SearchData = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false)
  const products = useProducts();

  const filteredProducts = query
    ? products.filter((product) => 
      product.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div style={{ position: "relative", zIndex: "10" }}>
      {/* Overlay for fading background */}
      {/* {isFocused && <div className="overlay" onClick={handleOverlayClick}></div>} */}

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search Product and Brands"
          className="search-input"
        />
        <button className="search-button" aria-label="Search">
          🔍
        </button>
      </div>

      {/* Dropdown Results */}
      {isFocused && query && (
        <div className="dropdown">
         
          <h4>Products</h4>
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchData;
