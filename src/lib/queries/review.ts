import { IAllReviews, IReview } from "@/types/IReview";
import { $axios } from "./axios";

export const getAllReviews = () =>
  $axios.get<IAllReviews[]>(`/review/`).then((data) => {
    return data.data;
  });

export const createReview = (review: Omit<IAllReviews, "id">) =>
  $axios.post<IReview>(`/review/`, { ...review }).then((data) => {
    return data.data;
  });

export const editReview = (review: IAllReviews) =>
  $axios
    .patch<IReview>(`/review/${review.id}/`, {
      text: review.text,
      rating: review.rating,
      movie: review.movie,
      user: review.user,
    })
    .then((data) => {
      return data.data;
    });

export const deleteReview = (reviewId: number) =>
  $axios.delete<IReview>(`/review/${reviewId}/`).then((data) => {
    return data.data;
  });
