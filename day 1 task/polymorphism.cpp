#include <iostream>
using namespace std;

class Item
{
public:
    int weight;
    Item(int _weight)
    {
        weight = _weight;
    }
};

class Coins : public Item
{
public:
    int amount;
    Coins(int _weight, int _amount) : Item(_weight)
    {
        amount = _amount;
    }
};

class Key : public Item
{
public:
    int code;
    Key(int _weight, int _code) : Item(_weight)
    {
        code = _code;
    }
};

class RareItem : public Item
{
public:
    int value;
    RareItem(int _weight, int _value) : Item(_weight)
    {
        value = _value;
    }
};

class Crossbow : public Item
{
public:
    int power;
    Crossbow(int _weight, int _power) : Item(_weight)
    {
        power = _power;
    }
};

class Mobile : public Item
{
public:
    int price;
    Mobile(int _weight, int _price) : Item(_weight)
    {
        price = _price;
    }
};

class Bike : public Item
{
public:
    int price;
    Bike(int _weight, int _price) : Item(_weight)
    {
        price = _price;
    }
};

class Laptop : public Item
{
public:
    int serialNumber;
    Laptop(int _weight, int _serialNumber) : Item(_weight)
    {
        serialNumber = _serialNumber;
    }
};

class Watch : public Item
{
public:
    string model;
    Watch(int _weight, string _model) : Item(_weight)
    {
        model = _model;
    }
};

class Bag
{
public:
    int currentWeight=0;

    bool canAddItem(Item item)
    {
        return currentWeight + item.weight <= 20;
    }

    void addToBag(Item item)
    {
        currentWeight+=item.weight;
        cout << "Weight : " << item.weight << " added to bag" << endl<<endl;
    }
    void canNotAddToBag(Item item)
    {
        cout << "Weight : " << item.weight << " can't be added to bag" << endl<<endl;
    }
};

int main()
{
    ///Old
    Coins *coin = new Coins(10, 10);

    Key *key = new Key(14, 20);

    Crossbow *crossbow = new Crossbow(0, 20);

    RareItem *rareitem = new RareItem(10, 40);

    ///New
    Mobile *mobile = new Mobile(5, 10);

    Bike *bike = new Bike(5, 10);

    Laptop *laptop = new Laptop(50, 10);

    Watch *watch = new Watch(20, "Rolex submariner");

    Bag *bag = new Bag();

    if (bag->canAddItem(*coin))
    {
        bag->addToBag(*coin);
    }
    else
    {
        bag->canNotAddToBag(*coin);
    }

    if (bag->canAddItem(*key))
    {
        bag->addToBag(*key);
    }
    else
    {
        bag->canNotAddToBag(*key);
    }

    if (bag->canAddItem(*crossbow))
    {
        bag->addToBag(*crossbow);
    }
    if (bag->canAddItem(*rareitem))
    {
        bag->addToBag(*rareitem);
    }
    else
    {
        bag->canNotAddToBag(*rareitem);
    }

    if (bag->canAddItem(*mobile))
    {
        bag->addToBag(*mobile);
    }
    else
    {
        bag->canNotAddToBag(*mobile);
    }

    if (bag->canAddItem(*bike))
    {
        bag->addToBag(*bike);
    }
    else
    {
        bag->canNotAddToBag(*bike);
    }

    if (bag->canAddItem(*laptop))
    {
        bag->addToBag(*laptop);
    }
    else
    {
        bag->canNotAddToBag(*laptop);
    }

    if (bag->canAddItem(*watch))
    {
        bag->addToBag(*watch);
    }
    else
    {
        bag->canNotAddToBag(*watch);
    }

    delete coin;
    delete key;
    delete crossbow;
    delete rareitem;
    delete mobile;
    delete bike;
    delete laptop;
    delete watch;
}
