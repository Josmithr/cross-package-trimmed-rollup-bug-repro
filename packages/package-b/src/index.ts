import { Foo } from 'package-a';

/**
 * Bar
 *
 * @public
 */
export class Bar implements Foo {
	/**
	 * {@inheritDoc package-a#Foo.x}
	 */
	x = 'x';
}
