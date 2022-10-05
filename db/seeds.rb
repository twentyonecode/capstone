gyms = [
    {
        gym_name: "Body Tech",
        store_code: "051",
        hours_of_operations:"M-F: 0500 - 2200, Sa-Su: 24h",
        phone_number:"878-556-4036",
        features:"Sauna, Daycare, Smoothie bar",
        street: "245 bodylane",
        city: "Pittsburg",
        state: "PA",
        email:"BodyTech051@bodttech.com",
        deal:"25% off supplements!!",
        deal_code: "BDYT0025",
        image: "https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg",
        user_id: 1
    },

    {
        gym_name: "Bicep Bros",
        store_code: "675",
        hours_of_operations:"M-F: 0600 - 2400, Sa-Su: 0600-1300",
        phone_number:"619-556-4036",
        features:"Sauna, Pool, Smoothie Bar",
        street: "9437 Tricep ave.",
        city: "San Diego",
        state: "CA",
        email:"Bicepbros675@bicepbros.com",
        deal: "Free Ginger smoothie weekly!",
        deal_code: "BB576SDCA",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
        user_id: 2
    },

    {
        gym_name: "Gains Gym",
        store_code: "244",
        hours_of_operations:"24h Weekly",
        phone_number:"718-277-1413",
        features: "Outdoor workouts, Sauna, Pool, Daycare, Tv Treadmill",
        street: "506 Chestnut St.",
        city: "Brooklyn",
        state: "NY",
        email:"GainsGym@gains.com",
        deal: "50% off gym sign up fee !!!",
        deal_code: "GAINS244",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        user_id: 3
    },


]



gyms.each do |each_gym|
    Gym.create each_gym
    puts "creating gym #{each_gym}"
end