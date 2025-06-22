<template>
  <div class="profile-content bdg-pri--800">
    <div class="content bdg-pri--1000">
      <form class="form fw-pri--200 fs-pri--600 clr-pri--200 ff-sec">
        <div class="form__content">
          <div class="form__sec">
            <label for="title">Title</label>
            <input
              type="text"
              placeholder="Please enter a valid title"
              v-model="title"
            />
          </div>
          <div class="form__sec">
            <label for="description">Description</label>
            <textarea
              type="text"
              placeholder="Please enter a valid description"
              v-model="description"
            ></textarea>
          </div>
          <div class="form__sec">
            <label for="price">Price</label>
            <input
              type="Number"
              placeholder="Please enter a valid price"
              v-model="price"
            />
          </div>
          <div class="form__sec">
            <label for="vehicle_brand">select vehicle brand</label>
            <select name="brand" id="vehicle_brand">
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Nissan">Nissan</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Audi">Audi</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Kia">Kia</option>
              <option value="Tesla">Tesla</option>
              <option value="Subaru">Subaru</option>
              <option value="Mazda">Mazda</option>
              <option value="Volvo">Volvo</option>
              <option value="Land Rover">Land Rover</option>
              <option value="Jaguar">Jaguar</option>
              <option value="Porsche">Porsche</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Lamborghini">Lamborghini</option>
              <option value="Bugatti">Bugatti</option>
              <option value="Rolls-Royce">Rolls-Royce</option>
              <option value="Bentley">Bentley</option>
              <option value="Aston Martin">Aston Martin</option>
              <option value="McLaren">McLaren</option>
              <option value="Harley-Davidson">Harley-Davidson</option>
              <option value="Yamaha">Yamaha</option>
              <option value="Kawasaki">Kawasaki</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Ducati">Ducati</option>
              <option value="KTM">KTM</option>
              <option value="Triumph">Triumph</option>
              <option value="Royal Enfield">Royal Enfield</option>
              <option value="Volvo Trucks">Volvo Trucks</option>
              <option value="Scania">Scania</option>
              <option value="MAN">MAN</option>
              <option value="Freightliner">Freightliner</option>
              <option value="Kenworth">Kenworth</option>
              <option value="Peterbilt">Peterbilt</option>
              <option value="Mack Trucks">Mack Trucks</option>
              <option value="Isuzu">Isuzu</option>
              <option value="Iveco">Iveco</option>
              <option value="Hino">Hino</option>
              <option value="Rivian">Rivian</option>
              <option value="Lucid Motors">Lucid Motors</option>
              <option value="Polestar">Polestar</option>
              <option value="BYD">BYD</option>
              <option value="VinFast">VinFast</option>
            </select>
          </div>
          <div class="form__sec">
            <label for="color">color</label>
            <select name="color" id="">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
              <option value="pink">Pink</option>
              <option value="brown">Brown</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="gray">Gray</option>
              <option value="cyan">Cyan</option>
              <option value="magenta">Magenta</option>
              <option value="turquoise">Turquoise</option>
              <option value="teal">Teal</option>
              <option value="lime">Lime</option>
              <option value="olive">Olive</option>
              <option value="maroon">Maroon</option>
              <option value="navy">Navy</option>
              <option value="beige">Beige</option>
              <option value="coral">Coral</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="bronze">Bronze</option>
              <option value="ivory">Ivory</option>
              <option value="lavender">Lavender</option>
              <option value="Indigo">Indigo</option>
              <option value="Crimson">Crimson</option>
              <option value="Scarlet">Scarlet</option>
              <option value="Ruby">Ruby</option>
              <option value="Sapphire">Sapphire</option>
              <option value="Emerald">Emerald</option>
              <option value="Aquamarine">Aquamarine</option>
              <option value="Peach">Peach</option>
              <option value="Mustard">Mustard</option>
              <option value="Periwinkle">Periwinkle</option>
              <option value="Lilac">Lilac</option>
              <option value="Amber">Amber</option>
              <option value="Mauve">Mauve</option>
              <option value="Tan">Tan</option>
              <option value="Charcoal">Charcoal</option>
              <option value="Mint">Mint</option>
              <option value="Plum">Plum</option>
              <option value="Burgundy">Burgundy</option>
              <option value="Rose">Rose</option>
              <option value="Sky Blue">Sky Blue</option>
              <option value="Copper">Copper</option>
              <option value="Sand">Sand</option>
              <option value="Khaki">Khaki</option>
              <option value="Azure">Azure</option>
              <option value="Baby blue">Baby blue</option>
              <option value="Blush">Blush</option>
              <option value="Cherry">Cherry</option>
              <option value="Cinnamon">Cinnamon</option>
              <option value="Cloud">Cloud</option>
              <option value="Denim">Denim</option>
              <option value="Ebony">Ebony</option>
              <option value="Fawn">Fawn</option>
              <option value="Flamingo">Flamingo</option>
              <option value="Fuchsia">Fuchsia</option>
              <option value="Glacier">Glacier</option>
              <option value="Honey">Honey</option>
              <option value="Ivory cream">Ivory cream</option>
              <option value="Jade">Jade</option>
              <option value="Jasmine">Jasmine</option>
              <option value="Juniper">Juniper</option>
              <option value="Lemon">Lemon</option>
              <option value="Licorice">Licorice</option>
              <option value="Mahogany">Mahogany</option>
              <option value="Mango">Mango</option>
              <option value="Maple">Maple</option>
              <option value="Mocha">Mocha</option>
              <option value="Mulberry">Mulberry</option>
              <option value="Ocean">Ocean</option>
              <option value="Onyx">Onyx</option>
              <option value="Opal">Opal</option>
              <option value="Papaya">Papaya</option>
              <option value="Pastel Green">Pastel Green</option>
              <option value="Pastel Pink">Pastel Pink</option>
              <option value="Peacock">Peacock</option>
              <option value="Pewter">Pewter</option>
              <option value="Pine">Pine</option>
              <option value="Raspberry">Raspberry</option>
              <option value="Rust">Rust</option>
              <option value="Saffron">Saffron</option>
              <option value="Sage">Sage</option>
              <option value="Sapphire Blue">Sapphire Blue</option>
              <option value="Seashell">Seashell</option>
              <option value="Sepia">Sepia</option>
              <option value="Slate">Slate</option>
              <option value="Smoke">Smoke</option>
              <option value="Snow">Snow</option>
              <option value="Steel Blue">Steel Blue</option>
              <option value="Sunset">Sunset</option>
              <option value="Tangerine">Tangerine</option>
              <option value="Vanilla">Vanilla</option>
              <option value="Velvet">Velvet</option>
              <option value="Vermilion">Vermilion</option>
              <option value="Walnut">Walnut</option>
              <option value="Wine">Wine</option>
              <option value="Zinc">Zinc</option>
              <option value="Zaffre">Zaffre</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
