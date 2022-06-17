# Logika orqaliy yechganda.
def big_number(x, y, z)
  if x > y && x > z
    x
  else
    if y > z
      y
    else
      z
    end
  end
end

# Oson yo'l bilan yechgan.
def big_number_2(x, y, z)
  [x, y, z].max
end

puts big_number(1, 2, 3)

puts big_number_2(1, 2, 3)