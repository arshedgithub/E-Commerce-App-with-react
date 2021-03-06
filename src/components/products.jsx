import React, { useEffect, useState } from "react";
import { getItems, getTitles } from "./../services/fakeDB";
import ListGroup from "./common/listGroup";
import Item from "./common/item";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { useHistory } from "react-router-dom";

const Products = () => {
  let history = useHistory();
  const products = [...getItems()];
  const categories = [{ _id: "", name: "All Categories" }, ...getTitles()];
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectItem = (item) => {
    const selectedItem = products.filter((t) => t._id === item._id);
    history.push("/cart", { data: item });
    window.scrollTo(0, 0);
  };

  const getPagedData = () => {
    const filtered =
      selectedCategory && selectedCategory._id
        ? products.filter((c) => c.title[0] === selectedCategory._id)
        : products;

    const items = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, items };
  };

  const { totalCount, items } = getPagedData();

  return (
    <div className="row">
      <div className="col-3">
        <ListGroup
          categories={categories}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="col">
        <p>Showing {totalCount} products</p>
        {items.map((item) => (
          <div key={item._id}>
            <Item item={item} onSelectItem={handleSelectItem} />
          </div>
        ))}
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
