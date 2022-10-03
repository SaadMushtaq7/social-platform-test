import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setSuggestions] = useState<any>([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      name: faker.name.fullName(),
      username: faker.internet.userName(),
      address: faker.address.cityName(),
      company: faker.company.name(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      avatar: faker.image.avatar(),
      dob: faker.date.birthdate(),
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <main className="grid grid-cols-1 md:grid-cols-1 md:max-w-1xl xl:grid-cols-1 xl:max-w-2xl max-auto">
      <section className="col-span-1">
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
          {suggestions.map((profile: any) => (
            <Story
              key={profile.userId}
              img={profile.avatar}
              username={profile.username}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Stories;
