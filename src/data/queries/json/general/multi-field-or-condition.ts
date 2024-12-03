import {
  DB_INDEX_ID,
  DATA_SOURCE_ID,
  IQueryViewData,
} from "../../../../config.js";

const queryViewData: IQueryViewData = {
  query: `FT.SEARCH {dbIndexName} "(@brandName:{nike}) | (@gender:{men})"`,
  dbIndexId: DB_INDEX_ID.FASHION_DS_SEARCH_INDEX,
  dataSourceId: DATA_SOURCE_ID.FASHION_DS,
};

export default queryViewData;