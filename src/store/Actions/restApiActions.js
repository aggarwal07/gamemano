import axios from "axios";
import { ApiConstants } from "@/appConstants/ApiConstants";

export const APIMethod = {
  GET: "GET",
  POST: "POST",
};
const FetchData = async ({
  methodType,
  url,
  pathParams,
  isNotGameManoURL = false,
  request,
  token,
  params,
  customHeader,
  customBaseUrl = "",
}) => {
  let baseURL2 = customBaseUrl;

  let reqHeaders = {
    "Content-Type": "application/json",
  };

  if (customHeader) {
    reqHeaders = customHeader;
  }
  if (token) {
    reqHeaders.Authorization = `Bearer ${token}`;
  }

  let completeURL = "";

  if (isNotGameManoURL) {
    completeURL = url;
  } else {
    completeURL = `${baseURL2}${url}${pathParams ? pathParams : ""}`;
  }
  if (params) {
    completeURL += (completeURL.indexOf("?") === -1 ? "?" : "&") + params;
  }

  console.log("complete URL : ", completeURL);

  if (APIMethod.POST === methodType) {
    try {
      const res = await axios.post(completeURL, request, {
        headers: reqHeaders,
        timeout: 1000 * 10,
      });
      if (res) {
        return { data: res.data, status: res.status };
      } else {
        console.error(`No Response From Your POST API : ${completeURL} `);
        return null;
      }
    } catch (error) {
      console.error(
        `Error Posting Data URL : ${completeURL} , ERROR : `,
        error
      );
      return null;
    }
  } else if (APIMethod.GET === methodType) {
    try {
      const res = await axios.get(completeURL, {
        headers: reqHeaders,
        timeout: 1000 * 10,
      });
      if (res) {
        return { data: res.data, status: res.status };
      } else {
        console.error(`No Response From Your GET API : ${completeURL} `);
        return null;
      }
    } catch (error) {
      console.error(
        `Error Fetching data URL : ${completeURL} , ERROR : `,
        error
      );
      return null;
    }
  }
};
//api calling

export const searchProducts = (queryParams, callback) => {
  return async (dispatch) => {
    try {
      const res = await FetchData({
        methodType: APIMethod.GET,
        url: ApiConstants.localUrl,
        isNotGameManoURL: false,
        dispatch: dispatch,
        isEncypted: false,
        pathParams: ApiConstants.searchProducts,
        params: queryParams,
      });
      if (res && res.status === 200) {
        if (callback) {
          callback(res.data);
        }
      }
    } catch (error) {
      console.log("searchApi Catch Error", error);
    }
  };
};
