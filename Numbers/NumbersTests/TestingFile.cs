using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Numbers;

namespace NumbersTests
{
    [TestFixture]
    public class TestingFile
    {
        

        [Test]
        public void Exercise1_GivenAnArrayOfIntegers_ReturnsIEnumberableWithIntegersLessOrEqualThan20()
        {
            //Arrange
            int[] sut = { 6, 109, 3, 25, 7,20 };
            NumbersOperations sut2 = new NumbersOperations(sut);
            //act
            sut2.Exercise1();
            //Assert
            Assert.That(sut2.Exercise1().Contains(6));
            Assert.That(sut2.Exercise1().Contains(3));
            Assert.That(sut2.Exercise1().Contains(7));
            Assert.That(sut2.Exercise1().Contains(20));
        }
        [Test]
        public void Exercise2_GivenAnArrayOfIntegers_ReturnsIenumerableWithIntegersBetweenAndIncluding40And55()
        {
            //Arrange
            int[] sut = { 45,6, 109, 3,40, 25,52, 7, 20,55 };
            NumbersOperations sut2 = new NumbersOperations(sut);
            //Act
            sut2.Exercise2();
            //Assert
            Assert.That(sut2.Exercise2().Contains(45));
            Assert.That(sut2.Exercise2().Contains(40));
            Assert.That(sut2.Exercise2().Contains(52));
            Assert.That(sut2.Exercise2().Contains(55));
        }
        [Test]
        public void Exercise3_GivenAnArrayOfIntegers_ReturnsIEnumerableWithEvenintegers()
        {
            //Arrange
            int[] sut = { 45, 6, 109, 3, 40, 25, 52, 7, 20, 55 };
            NumbersOperations sut2 = new NumbersOperations(sut);
            //Act
            sut2.Exercise3();
            //Assert
            Assert.That(sut2.Exercise3().Contains(6));
            Assert.That(sut2.Exercise3().Contains(40));
            Assert.That(sut2.Exercise3().Contains(52));
            Assert.That(sut2.Exercise3().Contains(20));
        }
        [Test]
        public void Exercise4_GivenAnArrayOfIntegers_ReturnsIEnumerableWithEvenintegers()
        {
            //Arrange
            int[] sut = { 45, 6, 28, 3, 56, 25, 52, 112, 20, 55 };
            NumbersOperations sut2 = new NumbersOperations(sut);
            //Act
            sut2.Exercise4();
            //Assert
            Assert.That(sut2.Exercise4().Contains(28));
            Assert.That(sut2.Exercise4().Contains(56));
            Assert.That(sut2.Exercise4().Contains(112));
        }

        [Test]
        public void Exercise5_GivenAnArrayOfIntegers_ReturnsIEnumerableWithIntegersFromArrayDividedBy2()
        {
            //Arrange
            int[] sut = { 20, 24, 28, 100};
            NumbersOperations sut2 = new NumbersOperations(sut);
            //Act
            sut2.Exercise5();
            //Assert
            Assert.That(sut2.Exercise5().Contains(10));
            Assert.That(sut2.Exercise5().Contains(12));
            Assert.That(sut2.Exercise5().Contains(14));
            Assert.That(sut2.Exercise5().Contains(50));
        }
        [Test]
        public void Exercise6_GivenAnArrayOfIntegers_ReturnsIEnumerableWithEvenIntegersFromArraySquared()
        {
            //Arrange
            int[] sut = { 10, 15, 20, 25,8 };
            NumbersOperations sut2 = new NumbersOperations(sut);
            //Act
            sut2.Exercise6();
            //Assert
            Assert.That(sut2.Exercise6().Contains(100));
            Assert.That(sut2.Exercise6().Contains(400));
            Assert.That(sut2.Exercise6().Contains(64));

        }

        [Test]
        public void Exercise7_GivenAnArrayOfIntegers_ReturnsCountOfNumberDivisibleBy11()
        {
            //Arrange
            int[] sut = {22,32,44,52,66,110,4,25 };
            NumbersOperations sut2 = new NumbersOperations(sut);
            //Act
            sut2.Exercise7();
            //Assert
            Assert.That(sut2.Exercise7, Is.EqualTo(4));
        }

        [Test]
        public void Exercise8_GivenAnArrayOfNumbers_ReturnsLastNumberFromArrayWhereSquareIsLessThan1000OrBiggerThan1500()
        {
            //Arrange
            int[] sut = { 22, 32, 44, 52, 66, 110, 4, 25 };
            NumbersOperations sut2 = new NumbersOperations(sut);
            //Act+Assert
            Assert.That(sut2.Exercise8, Is.EqualTo(25));
        }
        [Test]
        public void Exercise9_GivenAnArrayOfNumbers_ReturnsTheSumFromNumbersWhereSquareRootIsDivisibleBy3()
        {
            //Arrange
            int[] sut = { 1764, 32, 2304, 52, 2601, 110, 4, 25, 900,901 };
            NumbersOperations sut2 = new NumbersOperations(sut);
            //Act
            int sut3 = sut2.Exercise9();
            //Assert
            Assert.That(sut3, Is.EqualTo(7569));
        }

        public void Exercise10_GivenAnArrayOfIntegers_ReturnEvenNumbersIEnumerableOrderByDescending()
        {
            //Arrange
            int[] sut = { 1764, 32, 2304, 52, 2601, 110, 4, 25, 900, 901 };
            NumbersOperations sut2 = new NumbersOperations(sut);
            //Act+Assert
            Assert.That(sut2.Exercise10().First(), Is.EqualTo(2304));
            Assert.That(sut2.Exercise10().Last(), Is.EqualTo(4));

        }

    }
}
