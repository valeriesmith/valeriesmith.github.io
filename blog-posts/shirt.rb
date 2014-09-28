class Shirt

  def initialize(sleeves,color)
    @sleeves = sleeves
    @color = color
  end

  def instructions
    if @sleeves == "long"
      construction = "add a cuff with buttons"
    else
      construction = "clean finish the hem"
    end
    return "Use #{@color} thread on the garment, and #{construction} to finish the sleeve."
  end

end

newShirt = Shirt.new("long","green")
puts newShirt.instructions


