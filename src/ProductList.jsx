import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Indoor Plants',
    plants: [
      { id: 1, name: 'Snake Plant', cost: '$15', image: '/images/snake-plant.jpg', description: 'Easy to care for indoor plant.' },
      { id: 2, name: 'Peace Lily', cost: '$18', image: '/images/peace-lily.jpg', description: 'Beautiful flowering indoor plant.' },
      { id: 3, name: 'ZZ Plant', cost: '$20', image: '/images/zz-plant.jpg', description: 'Low-maintenance green plant.' },
      { id: 4, name: 'Pothos', cost: '$12', image: '/images/pothos.jpg', description: 'A lovely trailing plant.' },
      { id: 5, name: 'Spider Plant', cost: '$14', image: '/images/spider-plant.jpg', description: 'Great for bright indoor spaces.' },
      { id: 6, name: 'Rubber Plant', cost: '$22', image: '/images/rubber-plant.jpg', description: 'Glossy leaves and bold style.' },
    ],
  },
  {
    category: 'Outdoor Plants',
    plants: [
      { id: 7, name: 'Rose', cost: '$16', image: '/images/rose.jpg', description: 'Classic colorful garden flowers.' },
      { id: 8, name: 'Hibiscus', cost: '$19', image: '/images/hibiscus.jpg', description: 'Bright tropical blooms.' },
      { id: 9, name: 'Jasmine', cost: '$14', image: '/images/jasmine.jpg', description: 'Fragrant white flowers.' },
      { id: 10, name: 'Bougainvillea', cost: '$21', image: '/images/bougainvillea.jpg', description: 'Vibrant outdoor flowering plant.' },
      { id: 11, name: 'Marigold', cost: '$10', image: '/images/marigold.jpg', description: 'Cheerful golden flowers.' },
      { id: 12, name: 'Lavender', cost: '$17', image: '/images/lavender.jpg', description: 'Aromatic purple flowers.' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { id: 13, name: 'Aloe Vera', cost: '$12', image: '/images/aloe-vera.jpg', description: 'A hardy succulent plant.' },
      { id: 14, name: 'Jade Plant', cost: '$13', image: '/images/jade-plant.jpg', description: 'A compact, easy-care succulent.' },
      { id: 15, name: 'Echeveria', cost: '$11', image: '/images/echeveria.jpg', description: 'Beautiful rosette-shaped leaves.' },
      { id: 16, name: 'Cactus', cost: '$9', image: '/images/cactus.jpg', description: 'A desert plant needing little water.' },
      { id: 17, name: 'Sedum', cost: '$10', image: '/images/sedum.jpg', description: 'A versatile, colorful succulent.' },
      { id: 18, name: 'String of Pearls', cost: '$16', image: '/images/string-of-pearls.jpg', description: 'Trailing stems with round leaves.' },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        ...plant,
        quantity: 1,
      })
    );
  };

  return (
    <div className="product-list">
      <header className="product-header">
        <h1>Paradise Nursery</h1>
        <p>Find the perfect plants for your home and garden.</p>
        {onHomeClick && (
          <button onClick={onHomeClick}>Home</button>
        )}
      </header>

      {plantsArray.map((category) => (
        <section
          className="category-section"
          key={category.category}
        >
          <h2>{category.category}</h2>

          <div className="product-grid">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p className="plant-cost">{plant.cost}</p>

                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(plant)}
                >
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
                
                
                   
                    
                    
                
               
        
        
    
                

