const items = [
    { name: "Bread", category: "Grocery" },
    { name: "Butter", category: "Grocery" },
    { name: "Shampoo", category: "Personal Care" }
  ];
  
  const groupedItems = items.reduce((result, item) => {
    const { name, category } = item;
    

    if (!restult[category]) {
      result[category] = [];
    }
    

    result[category].push(name);
    
    return result;
  }, {});
  
  console.log(groupedItems);
  