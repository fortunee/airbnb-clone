import { ResolverMap } from "../../../types/graphql-utils";
import { getConnection } from "typeorm";
import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Query: {
    searchListings: async (
      _,
      { input: { name, beds, guests }, offset, limit }
    ) => {
      let listingQueryBuilder = getConnection()
        .getRepository(Listing)
        .createQueryBuilder("listing");

      if (guests) {
        listingQueryBuilder = listingQueryBuilder.andWhere(
          "listing.guests = :guests",
          { guests }
        );
      }

      if (beds) {
        listingQueryBuilder = listingQueryBuilder.andWhere(
          "listing.beds = :beds",
          { beds }
        );
      }

      if (name) {
        listingQueryBuilder = listingQueryBuilder.andWhere(
          "listing.name ilike :name",
          { name: `%${name}%` }
        );
      }

      return listingQueryBuilder.take(limit).skip(offset).getMany();
    },
  },
};
