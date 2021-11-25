const showInfoText = (filter, search, tag, currentFilter) => {
  return filter
    ? `Filtered to show - "${currentFilter(filter).join(', ')}"`
    : search
    ? `Showing results for - "${search}"`
    : tag
    ? `Filtered by tag - "${tag.toLowerCase()}"`
    : 'All Bookmarks';
};

export default showInfoText;
