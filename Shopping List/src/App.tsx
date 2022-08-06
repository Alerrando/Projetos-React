import { ArrowLeft, ArrowRight, CheckCircle, Circle, Plus } from 'phosphor-react';
import React, { useState, useEffect } from 'react';

export function App() {
	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([]);

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input className='add-item-input' placeholder='Add an item...' />
					<Plus size={32} weight="bold" />
				</div>
				<div className='item-list'>
					<div className='item-container'>
						<div className='item-name'>
							{/* HINT: replace false with a boolean indicating the item has been completed or not */}
							{false ? (
								<>
									<CheckCircle size={32} weight="bold" />
									<span className='completed'>Item 1</span>
								</>
							) : (
								<>
									<Circle size={32} weight="bold" />
									<span>Item 1</span>
								</>
							)}
						</div>
						<div className='quantity'>
							<button>
                <ArrowLeft size={32} weight="bold" />
							</button>
							<span> 1 </span>
							<button>
                <ArrowRight size={32} weight="bold" />
							</button>
						</div>
					</div>
				</div>
				<div className='total'>Total: 0</div>
			</div>
		</div>
	);
};