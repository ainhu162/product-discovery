
import { fetchList,getDetail, SEARCH_URL, DETAIL_URL } from "./../product";
import mockAxios from './../__mocks__/axios';

describe("fetchList", () => {
  it("fetches successfully products from an API", async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: "1",
            title: "a"
          },
          {
            objectID: "2",
            title: "b"
          }
        ]
      }
    };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchList("react")).resolves.toEqual(data);
    expect(mockAxios.get).toHaveBeenCalledWith(`${SEARCH_URL}&_page=1&q=react`,{'params':{}});
  });

  it("fetches erroneously products from an API", async () => {
    const errorMessage = "Network Error";
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(fetchList("react")).rejects.toThrow(errorMessage);
  });


});

describe("getDetail", () => {
  it("get successfully detail product from an API", async () => {
    const data = {
      result: {
        product: {
          id: 1,
          name: 'máy tính'
        }
      }
    };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getDetail(1)).resolves.toEqual(data);
    expect(
      mockAxios.get
    ).toHaveBeenCalledWith(
      `${DETAIL_URL}/1?channel=pv_online&terminal=phongvu`,
      { params: {} }
    );
  });

  it("fetches erroneously products from an API", async () => {
    const errorMessage = "Not Found";
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(getDetail(1)).rejects.toThrow(errorMessage);
  });
});