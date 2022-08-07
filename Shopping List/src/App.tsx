import { ArrowLeft, ArrowRight, CheckCircle, Circle, Plus } from 'phosphor-react';
import React, { useState } from 'react';

type itemsProps = {
	name: string,
	quant: number,
	selected: boolean,
}

export function App() {
	const [items, setItems] = useState<any[]>([]);
	const [itemName, setItemName] = useState<string>("");

	function searchItem() {
		for (let index = 0; index < items.length; index++) {
			if (items[index].name == itemName)
				return -1;
		}

		return 1;
	}

	function handleItem() {
		if (itemName.length <= 0)
			alert("Enter something to add to the list!");
		else {
			let search: number = searchItem();
			if (search < 0)
				alert("You have already added this item to the list!");
			else {
				let newItem = {
					name: itemName,
					quant: 1,
					selected: false,
				}

				setItems([...items, newItem]);
			}
		}
	}

	function changeSelected(item: itemsProps) {
		if (item.selected)
			item.selected = false;
		else
			item.selected = true;

		setItems([...items])
	}

	function totalResult() {
		let result: number = 0;
		items.map(item => {
			result += item.quant;
		})

		return result;
	}

	function upDownQuant(item: itemsProps, direction: string) {
		if (direction == "left")
		{
			if(item.quant > 0)
				item.quant--;
		}
		else if(direction == "right")
			item.quant++;

		setItems([...items])
	}

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input
						className='add-item-input'
						placeholder='Add an item...'
						onChange={e => setItemName((e.target as HTMLInputElement).value)}
					/>
					<Plus size={32} weight="bold" onClick={handleItem} className="addPlus" />
				</div>
				{items.map((item, index) => (
					<div className='item-container' key={index}>
						<div className='item-name'>
							{item.selected ? (
								<>
									<CheckCircle
										size={32}
										weight="bold"
										onClick={() => changeSelected(item)}
										className="circleBtn"
									/>
									<span className='completed'>{item.name}</span>
								</>
							) : (
								<>
									<Circle 
										size={32} 
										weight="bold" 
										onClick={() => changeSelected(item)} 
										className="circleBtn"
									/>
									<span>{item.name}</span>
								</>
							)}
						</div>

						<div className='quantity'>
							<button>
								<ArrowLeft size={32} weight="bold" onClick={() => upDownQuant(item, "left")} />
							</button>
							<span>{item.quant}</span>
							<button>
								<ArrowRight size={32} weight="bold" onClick={() => upDownQuant(item, "right")} />
							</button>
						</div>
					</div>
				))}
				<div className='total'>
					{(items.length == 0 ? (
						`Total: 0`
					) : (
						`Total: ${totalResult()}`
					)
					)}
				</div>
			</div>
		</div>
	);
};